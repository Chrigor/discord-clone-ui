import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div !== null && div !== undefined){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(20).keys()).map((elemento, indice) => (
          <ChannelMessage
            key={indice}
            author="Chrigor Eduardo"
            content="Hello!"
            date="25/03/2020" />
        ))}

        <ChannelMessage
          author="Erick Patrick"
          content={
            <>
              <Mention>@Chrigor Eduardo</Mention>, me carrega no valorant?
            </>
          }
          date="25/03/2020"
          isBot />

      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chatlivre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;