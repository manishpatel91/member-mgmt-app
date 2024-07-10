const getAge = (dateString: Date): number => {
    var today = new Date();
    var birthDate = new Date(dateString);
    console.log(dateString)
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age)
    return age
}

export { getAge }