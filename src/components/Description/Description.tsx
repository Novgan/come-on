import ChevronLeftIcon from "../uiKit/Icons/ChevronLeftIcon";
import DescriptionItem from "./components/DescriptionItem/DescriptionItem";

const Description = () => {
    return (
        <div className="h-screen">
            <h1 className="text-center font-bold text-4xl">Чому ми?</h1>
            <ul className="grid grid-cols-2 gap-12">
                <DescriptionItem
                    title="Зручне розташування"
                    img={<ChevronLeftIcon className="w-8 h-8 stroke-black stroke-2 shrink-0" />}
                    description="зал знаходиться в центрі Івано-Франківська, в 3 хв від фонтану на Вічевому майдані."
                />
                <DescriptionItem
                    title="Гарантія результату"
                    img={<ChevronLeftIcon className="w-8 h-8 stroke-black stroke-2 shrink-0" />}
                    description="Регулярно займаючись в нашому спортхабі 3 рази на тиждень, вже за місяць ви гарантовано відчуєте результат."
                />
                <DescriptionItem
                    title="Зручний графік тренувань"
                    img={<ChevronLeftIcon className="w-8 h-8 stroke-black stroke-2 shrink-0" />}
                    description="Щогодинні групові тренування з 8 ранку до 9 вечора, без вихідних."
                />
                <DescriptionItem
                    title="Здоровий підхід до тренувань"
                    img={<ChevronLeftIcon className="w-8 h-8 stroke-black stroke-2 shrink-0" />}
                    description="«Схуднути за будь-яку ціну» - не наш підхід, ми за любов до себе і до спорту, за те, щоб займатись в задоволення без шкоди для здоровя."
                />
                <DescriptionItem
                    title="Комфортні умови"
                    img={<ChevronLeftIcon className="w-8 h-8 stroke-black stroke-2 shrink-0" />}
                    description="У вільному доступі в залі знаходяться питна вода, рушник, душ і душовий набір (шампунь, гель для душу, кондиціонер для волосся), резинки для волосся, дезодорант, косметичний набір та засоби особистої гігієни. Це все для тебе, користуйся!"
                />
                <DescriptionItem
                    title="Кваліфіковані та дбайливі тренери"
                    img={<ChevronLeftIcon className="w-8 h-8 stroke-black stroke-2 shrink-0" />}
                    description="У нас працюють тільки  сертифіковані тренери, які регулярно оновлюють свої знання на внутрішніх навчаннях та всеукраїнських і міжнародних курсах."
                />
            </ul>
        </div>
    );
};

export default Description;
