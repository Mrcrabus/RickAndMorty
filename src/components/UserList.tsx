import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Avatar, Card, CardActionArea, Container, Grid, Typography} from '@mui/material';
import InfiniteScroll from "react-infinite-scroll-component";
import {fetchUsers} from "../store/action-creators/userActions";
import {useAppDispatch} from "../store";

const UserList: FC = () => {
  const {users, error} = useTypedSelector(state => state.users)
  const dispatch = useAppDispatch()
  const [limit] = useState(10)
  const [page, setPage] = useState(1)


  useEffect(() => {
    dispatch(fetchUsers(page, limit))

  }, [page])

  if (error) {
    return <h1>{error}</h1>
  }


  const handleChange = () => {
    setPage(page + 1);
  };


  return (
    <Container>
      <InfiniteScroll
        next={handleChange}
        hasMore={true}
        loader={<h1>Loading...</h1>}
        dataLength={users.length}
        hasChildren={true}
      >
        <Grid
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 6,
            flexWrap: 'wrap',
            '& > *': {minWidth: 0, flexBasis: 200},
          }}
        >
          {users.map((user, i) =>
            <CardActionArea key={i}>
              <Card
                variant="outlined"
                sx={{
                  maxWidth: 345,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 5,
                  paddingBottom: 5
                }}
              >
                <Avatar
                  alt={user.image}
                  src={user.image}
                  sx={{width: 50, height: 50}}
                />
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                  {user.name}
                </Typography>
              </Card>
            </CardActionArea>
          )}
        </Grid>
      </InfiniteScroll>


      {/*<Pagination*/}
      {/*  count={42}*/}
      {/*  page={page}*/}
      {/*  onChange={handleChange}*/}
      {/*  sx={{*/}
      {/*    display: "flex",*/}
      {/*    justifyContent: "center",*/}
      {/*    marginTop: 10*/}
      {/*  }}*/}
      {/*/>*/}


    </Container>
  );
};

export default UserList;