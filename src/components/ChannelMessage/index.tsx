import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  isBot?: boolean;
  hasMentions?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  isBot,
  hasMentions
}) => {
  return (
    <Container className={hasMentions ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} />

      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;