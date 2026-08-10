import NotePreviewClient from "./NotePreview.client";

interface NotePreviewPageProps {
  params: Promise<{ id: string }>;
}

const NotePreviewPage = async ({ params }: NotePreviewPageProps) => {
  const { id } = await params;

  return <NotePreviewClient id={id} />;
};

export default NotePreviewPage;
