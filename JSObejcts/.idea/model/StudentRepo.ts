type StudentRepo={
    name: String,
    id?: String | number
}
const vladi:StudentRepo={
    name: "Vladimir",
    id: "1"
}
const gerald:StudentRepo={
    name: "Gerald",
    id: "2"
}


let studs :StudentRepo[]= [vladi, gerald]


const editNameById=(studs:StudentRepo[], id: String, newName:String):StudentRepo[] =>{
    return studs.map((studs)=>{
        if (studs.id===id){
            const newStudent: StudentRepo={name: newName, id: studs.id}
            return newStudent
        }
        return studs
    })
}

const updateStud=(studs:StudentRepo[], id: String, newName:String):StudentRepo[] => {
    return studs.map((studs)=>{
        if (studs.id===id){
            studs.name=newName
        }
        return studs
    })
}
console.log(studs)
const newStuds = editNameById(studs,"1","Abraham")
console.log(newStuds)


