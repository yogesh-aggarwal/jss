###################################################################
######      Properties for Multiple classes at a time        ######
###################################################################
$theClassList: ["top", "middle", "bottom"];
.ele-[$theClassList] {
    color: black;
}

/*

*/


###################################################################
######                 Conditional defination                ######
###################################################################
$decide: "none";
@if ($decide == "none") {
    .ele-[$theClassList] {
        border: none
    }
} @elseif ($decide == "border") {
    .ele-[$theClassList] {
        border: 2px solid black;
    }
} @else {
    .ele-[$theClassList] {
        box-shadow: 0 0 2px #ccc;
    }
}

###################################################################
######                    Variable updation                  ######
###################################################################

$textColor: #fff;
.ele {
    border: none;
    color: $textColor;

    &:hover {
        $textColor: #000;
        color: $textColor;
    }
}

body {
    color: $textColor;
}
