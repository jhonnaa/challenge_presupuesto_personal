
const mainController ={
    send: (req,res)=>{
        req.getConnection((err,conn)=>{
            if (err)return res.send(err)
            conn.query('SELECT * FROM lista',(err,rows)=>{
                if (err)return res.send(err)
    
                res.json(rows)
            })
        })
    },

    create: (req,res)=>{
        req.getConnection((err,conn)=>{
            if (err)return res.send(err)
            console.log(req.body)
            conn.query('INSERT INTO lista set ?',[req.body],(err,rows)=>{
                if (err)return res.send(err)
    
                res.json(rows)
            })
        })
    },

    update: (req,res)=>{
        req.getConnection((err,conn)=>{
            if (err)return res.send(err)
            console.log(req.body)
            conn.query('UPDATE lista set ? WHERE  id = ?',[req.body, req.params.id],(err,rows)=>{
                console.log(req.body)
                if (err)return res.send(err)
                
                res.json(rows)
            })
        })
    },

    delete: (req,res)=>{
        req.getConnection((err,conn)=>{
            if (err)return res.send(err)
            console.log(req.body)
            conn.query('DELETE FROM lista WHERE  id = ?',[req.params.id],(err,rows)=>{
                if (err)return res.send(err)
    
                
            })
        })
    }


}

module.exports = mainController