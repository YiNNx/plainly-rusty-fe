import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useMutation } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';
import gql from 'graphql-tag';
import { ErrorMessage, SuccessMessage } from '../components/Util/Message';

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
    const [showSuccess, setShowSuccess] = useState(false);
    const fetchAvatarWithRetry = async (username: string, attemptsLeft: number = 3): Promise<string | null> => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            return data.avatar_url;
        } catch (error) {
            console.error('Error fetching user data:', error);

            if (attemptsLeft > 1) {
                // Retry fetching avatar
                return fetchAvatarWithRetry(username, attemptsLeft - 1);
            } else {
                // Max attempts reached, return null or handle accordingly
                return null;
            }
        }
    };

    const [tokenGrantMutation, { loading, error }] = useMutation(TOKEN_GRANT_MUTATION, {
        onCompleted: async (data) => {
            // Assuming the mutation returns a token
            const token = data?.tokenGrant;

            // Store the token in localStorage
            localStorage.setItem('token', token);
            let username = 'octocat';
            if (token) {
                try {
                    // 解析JWT并提取'sub'字段
                    const decodedToken = jwtDecode(token) as { sub: string, rol: string } | null;
                    if (decodedToken) {
                        username = decodedToken.sub;
                        localStorage.setItem('username', username);
                        localStorage.setItem('role', decodedToken.rol);
                    }
                } catch (error) {
                    // 处理解析错误
                    console.error('Error decoding token:', error);
                }

                try {
                    const avatar = await fetchAvatarWithRetry(username);

                    if (avatar !== null) {
                        localStorage.setItem('avatar', avatar);
                    }
                } catch (e) {
                    // 处理解析错误
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
        // Ensure code is available and not in a loading or error state
        if (code) {
            // Execute the mutation with the retrieved code
            tokenGrantMutation({ variables: { code } });
        }
    }, [code, tokenGrantMutation]);

    return (
        <div>
            {!error && <p>Loading...</p>}
            {/* {error && <ErrorMessage>Error: {error.message}</ErrorMessage>} */}
            {showSuccess && <SuccessMessage>Log-in successed!</SuccessMessage>}

        </div>
    );
};

export default Oauth;
