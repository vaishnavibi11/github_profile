import axios from "axios";
import React, { useEffect, useState } from "react";
import { List, Pagination, Spin } from "antd";
const Repo = ({ total }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUserData = async (page_no) => {
    setLoading(true);
    console.log(page_no)
    const res = await axios.get(
      "https://api.github.com/users/johnpapa/repos?per_page=6&page=" + page_no
    );
    setData(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getUserData(1);
  }, []);
  return (
    <div className={"container"}>
      {loading==true?<Spin/>:<><List
        dataSource={data}
       
        grid={{ gutter: 50, column: 2 }}
        renderItem={(item) => (
            
          <List.Item>
            <div className={"card"}>
              <p className={"title"}>{item.name}</p>
              <p className={"desc"}> {item.description}</p>
              {item.language && <div className={"tag"}>{item.language}</div>}
            </div>
          </List.Item>
        )}
      >
      </List>
     
      </>
      }
       <div className={'container'}><Pagination onChange={(page) => {
        getUserData(page);
      }} defaultCurrent={1} total={total}  pageSize={6}/></div>
    </div>
  );
};

export default Repo;
