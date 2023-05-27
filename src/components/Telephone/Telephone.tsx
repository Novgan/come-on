const Telephone = ({ phone = "063 605 31 14" }: { phone?: string }) => {
    return <a href={`tel:${phone}`}>{phone}</a>;
};

export default Telephone;
