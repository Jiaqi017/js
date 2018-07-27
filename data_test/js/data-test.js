$(function(){
    createTable();
    // console.log(selectedData,"selectedData")
    creatSelect(sourceData);
    $("#productSelect select").change(function(){
        var selected = selectChange($(this));
        var selectedT =    $("#regionSelect select").find("option:selected").text();
        var selectedData = findSelectData(sourceData, "product", selected, "region", selectedT);
        creatSelect(selectedData);
    })
    $("#regionSelect select").change(function(){
        var selected = selectChange($(this));
        var selectedT =    $("#productSelect select").find("option:selected").text();
        var selectedData = findSelectData(sourceData, "region", selected, "product", selectedT);
        creatSelect(selectedData);
    })
})

//根据selected获取数据
function findSelectData(datalist, keyword, selected, keywordT, selectedT){
    var selectedData = [];
    for(var i = 0; i < datalist.length; i++){
        // console.log("datalist[i].keyword",datalist[i],datalist[i][keyword])
        if(datalist[i][keyword] == selected && datalist[i][keywordT] == selectedT){
            selectedData.push(datalist[i])
        }
    }
    // console.log("selectedData",selectedData)
    return selectedData;
}

function selectChange(item){
    // var selectUrl = "";
    var selectVal = item.find("option:selected").text();
    item.parent().find(".sportsName").text(selectVal);
    // window.location.href = selectUrl + selectVal;
    return selectVal;
}
var sourceData = [{
    product: '苹果',
    region: '华南',
    sale: [120 ,100 ,150, 280, 100, 190, 180, 200, 150, 280, 100, 190]
},{
    product: '苹果',
    region: '华北',
    sale: [50, 60, 80, 120 , 100, 90, 180, 110, 130, 280, 100, 70]
},{
    product: '香蕉',
    region: '华北',
    sale: [150, 60, 180, 20 , 10, 90, 10, 110, 30, 80, 100, 70]
},{
    product: '香蕉',
    region: '华南',
    sale: [510, 260, 90, 120 , 20, 90, 24, 132, 33, 80, 102, 12]
},{
    product: '菠萝',
    region: '华北',
    sale: [150, 60, 180, 20 , 10, 90, 10, 110, 30, 80, 100, 70]
}]
function createTable(){
    var firstTable = " <table class=\"group-content\">\n" +
        "            <thead>\n" +
        "            <tr>\n" +
        "                <th>排名</th>\n" +
        "                <th><a href=\"\">地区</a></th>\n" +
        "                <th><a href=\"\">一月</a></th>\n" +
        "                <th><a href=\"\">二月</a></th>\n" +
        "                <th><a href=\"\">三月</a></th>\n" +
        "                <th class=\"active\"><a href=\"\">四月</a></th>\n" +
        "                <th><a href=\"\">五月</a></th>\n" +
        "                <th><a href=\"\">六月</a></th>\n" +
        "                <th><a href=\"\">七月</a></th>\n" +
        "                <th><a href=\"\">八月</a></th>\n" +
        "                <th><a href=\"\">九月</a></th>\n" +
        "                <th><a href=\"\">十月</a></th>\n" +
        "                <th><a href=\"\">十一月</a></th>\n" +
        "                <th><a href=\"\">十二月</a></th>\n" +
        "            </tr>\n" +
        "            </thead>\n" +
        "            <tbody>\n"  +
        "            </tbody>\n" +
        "        </table>\n" +
        "    </div>";
    $('.group-content-list').append(firstTable)
}

//根据数据创建表格
function creatSelect(selectedData){
    var select = '';
    for(var i = 0; i < selectedData.length; i++){
        select += "<tr>\n";
        console.log("select i",selectedData[i])
        for(var key in selectedData[i]){
            if($.isArray(selectedData[i][key])){
                for(var j = 0; j < selectedData[i][key].length; j++){
                    select += "<td>"+ selectedData[i][key][j] +"</td>\n"
                }
            }else{
                select += "<td>"+ selectedData[i][key] +"</td>\n"
            }
        }
        select += "</tr>\n";
    }
    // select += traverseData(selectedData)

    $('.group-content tbody').empty().append(select);
}

/*
function traverseData(obj){
    var select = '';
    for(var i = 0; i < obj.length; i++){
        console.log("select i",obj[i])
        if($.isArray(obj[i])){
            for(var j = 0; j < obj[i].length; j++){
                // select += "<td>"+ obj[i][j] +"</td>\n"
                console.log(obj[i][j])

                traverseData(obj[i]);
            }
        }else if(typeof obj[i] == 'object'){
            for(var key in obj[i]){
                // select += "<td>"+ obj[i][key] +"</td>\n"
                console.log(obj[i][key])
                if(typeof obj[i][key] == 'object'){
                    traverseData(obj[i]);
                }else{
                    select += "<td>"+ obj[i][key] +"</td>\n"
                }
            }
        }else{
            select += "<td>"+ obj[i] +"</td>\n"
        }
    }
    return select;
}
*/

