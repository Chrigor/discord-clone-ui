import React from 'react';

import { Container, User, Avatar, Role } from './styles';

interface PropsUserRole {
  nickname: string;
  isBot?: boolean;
}
const UserRole: React.FC<PropsUserRole> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot': ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRole nickname="Chrigor Eduardo" />

      <Role>Offline - 10</Role>
      <UserRole nickname="Dieguito Fernandes Rodrigues" isBot />
      <UserRole nickname="Fulano" isBot />
      <UserRole nickname="Fulano" isBot />
      <UserRole nickname="Ronaldinho" />
      <UserRole nickname="Ronaldinho" />
      <UserRole nickname="Dieguito Fernandes Rodrigues" isBot />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
      <UserRole nickname="Dieguito Fernandes Rodrigues"  />
    </Container>
  );
};

export default UserList;