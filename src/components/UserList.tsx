import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";
import {Avatar, Card, Container, Grid, Pagination, Typography} from '@mui/material';

const UserList: FC = () => {
  const {users, loading, error, page, limit} = useTypedSelector(state => state.users)
  const {fetchUsers, setUsersPage} = useActions()


  useEffect(() => {
    fetchUsers(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  const handleChange = (e: any, p: number) => {
    setUsersPage(p);
  };


  return (
    <Container>
      <Grid
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
          flexWrap: 'wrap',
          '& > *': { minWidth: 0, flexBasis: 200 },
        }}
      >
        {users.map(user =>
          <Card
            key={user.id}
            variant="outlined"
            sx={{
              maxWidth: 345,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
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
        )}
      </Grid>

      <Pagination
        count={42}
        page={page}
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10
        }}
      />


    </Container>
  );
};

export default UserList;