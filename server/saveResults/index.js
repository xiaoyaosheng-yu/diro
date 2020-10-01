exports.main = async (context) => {
    const cloud = context.cloud
    const data = context.data
    const params = [data.q1,data.q2,data.q3,data.q4,data.q5,
        data.q6,data.q7,data.q8,data.other_advices,data.userNick]

    try {
        let count = await cloud.dataspace.executeSql('SELECT count(1) as cnt FROM survey_results where user_id = ?', [data.userNick]); 
        console.log('数据查询: ',count)
        console.log('结果长度: ',count.length)
        console.log('查询结果：',count[0].cnt)
        if(count.length >0 && count[0].total >0 ){
            let data = await cloud.dataspace.executeSql(`update survey_results set 1st_question = ?,2nd_question = ?,3rd_question = ?,4th_question = ? ,5th_question = ? ,6th_question = ?,
            7th_question = ?,8th_question = ?,other_advices = ? where user_id = ?`
            , params);
            
            return { success:true,  msg: data, };  
        }else{
            let data = await context.cloud.dataspace.executeSql(`insert into survey_results(1st_question,2nd_question,3rd_question,4th_question,5th_question,6th_question,7th_question,8th_question,other_advices,user_id,gmt_create,gmt_modified ) 
                     values(?,?,?,?,?,?,?,?,?,?, now(), now())`
            , params);
            return { success:true,  msg: data, };  
        }
    } catch (error) {
       console.log(err);
       return {  success:false,  msg: err,  }  
    }

};