import { FC } from 'react';
import {
  Body,
  Paper,
  Title,
  Date,
  Signature,
  Bookmark,
  Modal,
  EmailInput,
  Loader,
  Button,
} from './components';
import { useAppStyles } from './app.styles';
import { useApp } from './use-app';

export const App: FC = () => {
  const styles = useAppStyles();
  const {
    title,
    onTitleChange,
    letter,
    onLetterChange,
    date,
    onDateChange,
    send,
    onClickSend,
    onCloseSend,
    email,
    onEmailChange,
    sendDisabled,
    dateFormated,
    onSend,
    onSignatureWrote,
    isLoading,
  } = useApp();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={styles.app}>
      <Paper>
        <Title onChange={onTitleChange}>{title}</Title>
        <Body onChange={onLetterChange}>{letter}</Body>
        <Date
          label='New York, '
          value={date}
          onChange={onDateChange}
        />
        <Signature onChange={onSignatureWrote} />
        <Bookmark onClick={onClickSend}>Send</Bookmark>
      </Paper>
      <Modal
        opened={send}
        title='Send'
        onClose={onCloseSend}
      >
        <EmailInput
          label='For ?'
          value={email}
          onChange={onEmailChange}
        />
        <Button
          label={`at: ${dateFormated}`}
          disabled={sendDisabled}
          onClick={onSend}
        />
      </Modal>
    </main>
  );
};
