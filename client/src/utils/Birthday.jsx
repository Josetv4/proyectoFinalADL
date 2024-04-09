const Birthday = ({ birthDate }) => {
    const calculateAge = (birthday) => {
        const birthDate = new Date(birthday);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    };

    return (
        <span>{birthDate && `${calculateAge(birthDate)} años`}</span>
    );
};

export default Birthday;
