interface Props {
  params: { id: string; photoId: string };
}

const UserPhotosPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserPhotosPage {id} {photoId}
    </div>
  );
};

export default UserPhotosPage;
