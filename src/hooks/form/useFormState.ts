import { useState, ChangeEvent, useEffect } from 'react';

type ChangeEventType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export interface useFormStateProps {
  [key: string]: any;
}

const useFormState = (initialData: useFormStateProps, initialImageURLs?: (string | null)[]) => {
  const [postFormData, setPostFormData] = useState(initialData);
  const [imageURLs, setImageURLs] = useState(initialImageURLs);

  const handleChange = (event: ChangeEvent<ChangeEventType>) => {
    const { name, value, type } = event.target;
    console.log(name, type);
    if (event.target instanceof HTMLInputElement && type === 'file') {
      const fileArray: File[] = event.target.files ? Array.from(event.target.files) : [];
      setPostFormData({ ...postFormData, [name]: fileArray });
      const objectURLs: string[] = [];
      for (let i = 0; i < fileArray.length; i++) {
        const objectURL = URL.createObjectURL(fileArray[i]);
        objectURLs.push(objectURL);
      }
      setImageURLs(objectURLs);
    } else {
      const isEmpty = value.trim() === '';
      setPostFormData({ ...postFormData, [name]: value });
      if (isEmpty) return;
    }
  };

  const handleFileDelectClick = (index: number) => {
    if (imageURLs && imageURLs[index] !== null) {
      URL.revokeObjectURL(imageURLs[index] as string);

      const updatedFiles = [...postFormData.file];
      updatedFiles.splice(index, 1);
      setPostFormData({ ...postFormData, file: updatedFiles });
    }
    if (imageURLs) {
      const updatedImageURLs = [...imageURLs];
      updatedImageURLs.splice(index, 1);
      setImageURLs(updatedImageURLs);
    }
  };

  useEffect(() => {
    if (initialImageURLs && initialImageURLs.length > 0) {
      setImageURLs(initialImageURLs);
    }
  }, [initialImageURLs]);

  return {
    imageURLs,
    postFormData,
    handleChange,
    handleFileDelectClick,
    setPostFormData,
    setImageURLs,
  };
};

export default useFormState;
