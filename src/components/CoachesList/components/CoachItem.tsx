const CoachItem = () => {
    return (
        <li className="min-w-full md:min-w-[calc(50%-12px)] flex flex-col h-full overflow-hidden cursor-default snap-end">
            <div className="h-full relative">
                <img src="/images/test.jpg" className="w-full h-full object-cover absolute left-0 top-0" />
            </div>
            <div className="text-center text-2xl font-bold">Kate</div>
        </li>
    );
};

export default CoachItem;
