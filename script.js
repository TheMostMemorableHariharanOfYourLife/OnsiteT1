var sno=0,sno1=1,change=0;
var container=null,iD=null,num=0;

document.addEventListener('keyup', function(e) {
    if(e.keyCode==13)
        submit();
}
);

function submit() {
    
    var el=document.getElementById("name");
    if(el.value!='') {
        sno++;
        localStorage.setItem("name"+sno, el.value);

        var element1=document.createElement("input");
        element1.setAttribute("id", "name1"+sno);
        var element2=document.createElement("label");
        element2.setAttribute("id", "name2"+sno);
        element2.draggable='true';
        element2.addEventListener("drag", drag);
        element2.addEventListener("mouseover", drop);
        var element3=document.createElement("br");
        element3.setAttribute("id", "name3"+sno);

        element1.type="checkbox";
        element2.innerHTML+=el.value;
        document.getElementById("list").appendChild(element1);
        document.getElementById("list").appendChild(element2);
        document.getElementById("list").appendChild(element3); 
        el.value='';
    }
}

function drag(e) {
    e.preventDefault();
    if(num==0) {
        iD=e.target.id;
        container=e.target.innerHTML;
        num++;
    }
}

function drop(e) {
    e.preventDefault();
    if(container!=null&&iD!=null) {
        document.getElementById(iD).innerHTML=e.target.innerHTML;
        e.target.innerHTML=container;
        iD=null;
        container=null;
        num=0;
    }
}

function del() {
    if(document.getElementById("name1"+sno1)!=null&&document.getElementById("name1"+sno1).checked==true) {
        document.getElementById("name1"+sno1).remove();
        document.getElementById("name2"+sno1).remove();
        document.getElementById("name3"+sno1).remove();
        change++;
    }

    for(i=1;change!=0&&sno-sno1>=i;i++) {
        document.getElementById("name1"+(sno1+i)).setAttribute("id", "name1"+(sno1+i-1));
        document.getElementById("name2"+(sno1+i)).setAttribute("id", "name2"+(sno1+i-1));
        document.getElementById("name3"+(sno1+i)).setAttribute("id", "name3"+(sno1+i-1));
    }

    if(change!=0) {
        sno--;
        sno1--;
        change--;
    }

    if(sno>=sno1) {
        sno1++;
        del();
    }

    else
        sno1=1;
}