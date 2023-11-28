import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useMutation } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';
import gql from 'graphql-tag';

const TOKEN_GRANT_MUTATION = gql`
  mutation TokenGrant($code: String!) {
    tokenGrant(code: $code)
  }
`;

const Oauth: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const fetchAvatarWithRetry = async (username: string, attemptsLeft: number = 3): Promise<string | null> => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            return data.avatar_url;
        } catch (error) {
            console.error('Error fetching user data:', error);

            if (attemptsLeft > 1) {
                return fetchAvatarWithRetry(username, attemptsLeft - 1);
            } else {
                return null;
            }
        }
    };

    const [tokenGrantMutation, { error }] = useMutation(TOKEN_GRANT_MUTATION, {
        onCompleted: async (data) => {
            const token = data?.tokenGrant;

            localStorage.setItem('token', token);
            let username = 'octocat';
            if (token) {
                try {
                    const decodedToken = jwtDecode(token) as { sub: string, rol: string } | null;
                    if (decodedToken) {
                        username = decodedToken.sub;
                        localStorage.setItem('username', username);
                        localStorage.setItem('role', decodedToken.rol);
                    }
                } catch (error) {
                    console.error('Error decoding token:', error);
                }

                try {
                    const avatar = await fetchAvatarWithRetry(username);

                    if (avatar !== null) {
                        localStorage.setItem('avatar', avatar);
                    }
                } catch (e) {
                    console.error('Error decoding token:', e);
                }

            }
            navigate("/");
            window.location.reload();
        },
        onError: (error) => {
            console.error("Mutation error:", error.message);
        },
    });

    useEffect(() => {
        if (code) {
            tokenGrantMutation({ variables: { code } });
        }
    }, [code, tokenGrantMutation]);

    return (
        <div>
            {!error && <p>Loading...</p>}
            {/* {error && <ErrorMessage>Error: {error.message}</ErrorMessage>} */}
        </div>
    );
};

export default Oauth;
