type userDetails = {
    name: string,
    email: string,
    phone: number
}


function showDetails(user: userDetails): userDetails {
    return user;
}

showDetails({ name: "Sudhanshu Kumar", email: "ksudhanshu394@gmail.com", phone: 8115830551 });