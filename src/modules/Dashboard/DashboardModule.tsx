import CoachesList from "@/components/CoachesList/CoachesList";
import Description from "@/components/Description/Description";
import Footer from "@/components/Layouts/Footer/Footer";
import Menu from "@/components/Layouts/Menu/Menu";
import WorkoutsList from "@/components/WorkoutsList/WorkoutsList";
import React from "react";

const DashboardModule = () => {
    return (
        <Footer>
            <Menu>
                <main>
                    <Description />
                    <WorkoutsList />
                    <CoachesList />
                </main>
            </Menu>
        </Footer>
    );
};

export default DashboardModule;
