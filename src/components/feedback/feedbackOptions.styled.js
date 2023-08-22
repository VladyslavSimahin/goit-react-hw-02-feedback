import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const FeedbackButton = styled.button`
  display: block;
  min-width: 80px;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;

  background-color: ${({ theme, color }) => theme.colors[color]};
`;
