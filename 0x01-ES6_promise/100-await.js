import { uploadPhoto, createUser } from './utils'


function sol(upphoto, creuser) {
  const photo = await upphoto;
  const user = await creuser;
  return {
    photo,
    user,
  };
}
export default async function asyncUploadUser(uploadPhoto, createUser) {
  try {
    const res = sol(uploadPhoto, createUser);
    return res;
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}

