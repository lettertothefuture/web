import { useCallback, useEffect, useRef, useState } from 'react';
import { SignaturePad } from '../../utils';
import { Theme, useTheme } from 'react-jss';
import { SignatureProps } from './signature.props';

export const useSignature = (props: SignatureProps) => {
  const theme = useTheme<Theme>();
  const divRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [signature, setSignature] = useState<SignaturePad | undefined>(
    undefined,
  );
  const [width, setWidth] = useState<number | undefined>(undefined);

  const clear = useCallback(() => {
    signature?.clear();
  }, [signature]);

  const onMouseDown = useCallback(
    (str: string) => {
      if (props.onChange) {
        props.onChange(str);
      }
    },
    [props],
  );

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas === null) {
      throw new Error('INICIALIZATION OF CANVAS IS REQUIRED !!!!');
    }

    setSignature(
      new SignaturePad(canvas!, onMouseDown, {
        penColor: theme.textPrimary,
      }),
    );
  }, [canvasRef, theme, props, onMouseDown]);

  useEffect(() => {
    const resizeobserver = new ResizeObserver((event) => {
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });

    if (divRef.current) {
      resizeobserver.observe(divRef.current);
    }
  });

  return {
    canvasRef,
    divRef,
    clear,
    width,
  };
};
