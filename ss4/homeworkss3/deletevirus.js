class student {
    id;
    nameOfStudent;
    ageOfStudent;
    course;

    constructor(id,nameOfStudent,ageOfStudent,course){
        this.id = uuid.v4();
        this.nameOfStudent = nameOfStudent;
        this.ageOfStudent = ageOfStudent;
        this.course = course;
    }
}

class teacherClass {
    id;
    nameOfTeacher;
    ageOfTeacher;
    level;

    constructor(id,nameOfTeacher,ageOfTeacher,level){
        this.id = uuid.v4();
        this.nameOfTeacher = nameOfTeacher;
        this.ageOfTeacher = ageOfTeacher;
        this.level = level;
    }
}

class subjectClass {
    nameOfSubject;

    constructor(nameOfSubject){
        this.nameOfSubject = nameOfSubject
    }
}


class classroomm {
    id;
    subject;
    teacher;
    students;

    constructor(id,subject,teacher,students){
        this.id = uuid.v4();
        this.subject = subject;
        this.teacher = [];
        this.students = [];
    } 

    addSubject(z){
        if( z instanceof subjectClass){
            this.subject = z;
        }
    }
    
    addTeacher(v){
        if (v instanceof teacherClass){
            this.teacher.push(v);
        }
    }

    addStudents(x){
        if ( x instanceof student){
            this.students.push(x);
        }
    }

    deleteStudents(id){
        let studentIndex = this.students.findIndex(item => iteam.id === id);
        if ( studentIndex >-1){
            this.students.splice(studentIndex,1)
        }
    }

    deleteTeacher(id){
        let teacherIndex = this.teacher.findIndex(item => iteam.id === id);
        if ( teacherIndex >-1){
            this.teacher.splice(teacherIndex,1)
        }
    }

    updateStudent(id,data){
        let findStudent = this.students.find(function(student){
            return student.id === id;
        });
        
        if( findStudent != null){
            student.update(data)
        }
    }

    updateTeacher(id,data){
        let findTeacher = this.teacher.find(function(teacher){
            return teacherClass.id === id;
        });
        
        if( findTeacher != null){
            this.teacher.update(data)
        }
    }
    showStudents(){
        console.log(this.students);
    }

    showTeacher(){
        console.log(this.teacher);
    }

    findStudentById(id){
        let studentById = this.students.find(function(student){
            return student.id === id;
        });
    }

    findStudentByName(name){
        let studentByName = this.students.filter(student =>student.nameOfStudent === name);
    }
}


//  bai 2
class person {
    name;
    age;
    phoneNumber;

    constructor(name,age,phoneNumber){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
}

class location extends person {
    x;
    y;

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class People {
    person;

    constructor(person){
        this.person = [];
    }

    addPerson(v){
        if(v instanceof person ){
            this.person.push(v);
        }
    }
}


function distance(a, b) {
    const dx = a.location.x - b.location.x;
    const dy = a.location.y - b.location.y;

}



class people {
    person;
    f0;
    f1;
    f2;

    constructor(person,f0,f1,f2){
        this.person = [];
        this.f0 = [];
        this.f1=[];
        this.f2 = [];
    }
    
    addF0(x){
        if( x instanceof person){
            this.f0 = x;
        }
    }

    findf1(){
        for(let i= 0;i< this.person.length;i++){
            if(distance(f0,this.person[i])<2){
                this.f1.push(this.person[i])
            }
        }
    }

    findf2(){
        for(let i=0;i< this.f1.length;i++){
            for(let p=0;p<this.person.length;p++){
                if(distance(this.person[p],this.f1[i])<2){
                    this.f2.push(this.person[p])
                }
            }
        }
    }
}