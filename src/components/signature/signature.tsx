import { FC } from 'react';
import { useSignatureStyles } from './signagture.styles';
import { SignatureProps } from './signature.props';
import { useSignature } from './use-signature';

export const Signature: FC<SignatureProps> = (props) => {
  const styles = useSignatureStyles();
  const { canvasRef, clear, divRef, width } = useSignature(props);

  return (
    <div
      ref={divRef}
      className={styles.container}
    >
      <h6 className={styles.title}>Assinado:</h6>
      <small className={styles.information}>
        Use o mouse ou toque para desenhar
      </small>
      <canvas
        ref={canvasRef}
        className={styles.pad}
        height='90'
        width={width}
      ></canvas>
      <button
        className={styles.clear}
        onClick={clear}
      >
        Limpar
      </button>
    </div>
  );
};
