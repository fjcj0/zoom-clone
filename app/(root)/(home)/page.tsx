import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
    return (
        <section className="flex size-full flex-col gap-10 text-white">
            <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover max-lg:px-5 max-lg:py-5">
                <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8  lg:p-11">
                    <h2 className="font-bold bg-blue-1/20 p-3 text-center self-start rouned-lg text-2xl rounded-xl">Upcoming Meeting at: 12:30</h2>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-[900]">
                            {time}
                        </h1>
                        <p className="text-lg font-semibold">Satruday, March 23, 2024</p>
                    </div>
                </div>
            </div>
            <MeetingTypeList />
        </section>
    );
}
export default Home;