const WorkoutItem = () => {
    return (
        <li className="relative min-w-[calc(50%-12px)] p-6 flex flex-col gap-y-6 group/workout cursor-default snap-normal snap-end">
            <img
                src="/images/test.jpg"
                className="absolute -z-10 w-full h-full object-cover left-0 top-0 ease-in duration-300 group-hover/workout:blur-sm"
            ></img>
            <div className="text-center text-2xl font-bold opacity-50 group-hover/workout:opacity-100 ease-in duration-300">
                Functional training
            </div>
            <p className="opacity-25 group-hover/workout:opacity-100 ease-in duration-300 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere asperiores magni, vero sequi earum
                veritatis officia dignissimos! Similique dolor laborum eum accusamus quis iure incidunt amet nisi cum in
                adipisci dignissimos atque beatae vel, ea delectus unde nesciunt necessitatibus et nobis sunt voluptas
                reprehenderit, doloremque quam! Quaerat impedit veritatis quae.
            </p>
        </li>
    );
};

export default WorkoutItem;
