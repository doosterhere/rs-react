const getBase64 = (file: File): Promise<string> => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString() || '';
      resolve(base64String);
    };

    reader.readAsDataURL(file);
  });
};

export { getBase64 };
