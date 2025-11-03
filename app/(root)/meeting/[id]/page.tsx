const Meeting = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    return (
        <div>
            <h1>Meeting room: #{id}</h1>
        </div>
    );
}
export default Meeting;