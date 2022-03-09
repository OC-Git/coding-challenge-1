interface Props {
  intensity: number;
}

export const AmbientLight = (props: Props): JSX.Element => {
  return <ambientLight {...props} />;
};
