const LangSwitch = () => {
  const languages: string[] = ["fr", "en"];

  return <div>{languages[1].toUpperCase()}</div>;
};

export default LangSwitch;
