import CoachesList from "@/components/CoachesList/CoachesList";
import Description from "@/components/Description/Description";
import Footer from "@/components/Layouts/Footer/Footer";
import HeadLayout from "@/components/Layouts/Head/Head";
import WorkoutsList from "@/components/WorkoutsList/WorkoutsList";
import React from "react";

const DashboardModule = () => {
    return (
        <>
            <HeadLayout>
                <Description />
                <WorkoutsList />
                <CoachesList />
                <Footer />
            </HeadLayout>
        </>
    );
};

export default DashboardModule;
