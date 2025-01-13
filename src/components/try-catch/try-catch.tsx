/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, FC } from 'react';
import { TryCatchProps, TryCatchState } from './try-catch.props';
import { Paper } from '../paper';
import { Button } from '../button';
import { useTryCatchStyles } from './try-catch.styles';

class TryCatchComponent extends Component<TryCatchProps, TryCatchState> {
  constructor(props: TryCatchProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={this.props.style.root}>
          <Paper>
            <div className={this.props.style.container}>
              <div>
                <h1 className={this.props.style.title}>Essa não =( </h1>
                <p className={this.props.style.information}>
                  Aconteceu algo que não esperavamos, entretanto pode tentar
                  novamente clicando abaixo e prometemos que iremos tentar de
                  tudo ✊
                </p>
              </div>
              <Button
                label='recarregar'
                disabled={false}
                onClick={() => {
                  location.reload();
                }}
              />
            </div>
          </Paper>
        </div>
      );
    }

    return this.props.children;
  }
}

export const TryCatch: FC<Omit<TryCatchProps, 'style'>> = (props) => {
  const style = useTryCatchStyles();

  return (
    <TryCatchComponent
      {...props}
      style={style}
    />
  );
};
