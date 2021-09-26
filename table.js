let employees=[
    {
    id :1,
    name:'hari',
    age:24,
    designation:'software engineer',
    isActive:true
    },
    {
    id :2,
    name:'venkat',
    age:31,
    designation:'Sr.manager',
    isActive:true
    },
    {
    id :1,
    name:'varma',
    age:24,
    designation:'Project Manager',
    isActive:true
    }, 
    {
    id :4,
    name:'bala',
    age:24,
    designation:'Team leader',
    isActive:true
    },
    {
    id :5,
    name:'harish',
    age:35,
    designation:' Software engineer',
    isActive:true
    }
    
];

var k='<tbody>'
for(i=0;i<employees.length;i++){
    k+='<tr>';
    k+='<td>' + employees[i].id + '</td>';
    k+='<td>' + employees[i].name + '</td>';
    k+='<td>' + employees[i].age + '</td>';
    k+='<td>' + employees[i].designation + '</td>';
    k+='<td>' + employees[i].isActive + '</td>';
    k+='</tr>';
}
document.getElementById('tableData').innerHTML=k;
document.getElementById('tableData').style.background='#727272';
document.getElementById('head').style.background='red';