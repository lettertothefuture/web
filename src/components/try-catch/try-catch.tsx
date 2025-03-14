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
                <h1 className={this.props.style.title}>Ops =(</h1>
                <p className={this.props.style.information}>
                  It didn't go in the way as expected
                </p>
                <small>{JSON.stringify(this.state.error)}</small>
              </div>
              <Button
                label='refresh'
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
