const members_of_family = [
    {
        name: "Jaloliddin",
        surname: "Inomov",
        age: "13",
        grade: "8",
        ID: "0001"
    },
    {
        name: "Kamoliddin",
        surname: "Inomov",
        age: "10",
        grade: "5",
        ID: "0002"
    },
    {
        name: "Dilfuza",
        surname: "Inomova",
        age: "6",
        ID: "0003"
    },
    {
        name: "Jamoliddin",
        surname: "Raximov",
        age: "40",
        ID: "0004"
    },
    {
        name: "Nozima",
        surname: "Raximova",
        age: "39",
        ID: "0005"
    }
];

let userID = prompt("Iltimos, IDingizni ayting");

const result = members_of_family.find(item => item.ID === userID);
if (result) {
    alert(`Name: ${result.name}\nSurname: ${result.surname}\nAge: ${result.age}`);
} else {
    alert("Bunday ID mavjud emas");
}
