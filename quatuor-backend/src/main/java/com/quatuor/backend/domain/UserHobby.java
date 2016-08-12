package com.quatuor.backend.domain;

import javax.persistence.*;

/**
 * Created by lede on 8/12/16.
 */
@Entity
public class UserHobby {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userHobbyId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hobby")
    private Hobby hobby;

    public Long getUserHobbyId() {
        return userHobbyId;
    }

    public void setUserHobbyId(Long userHobbyId) {
        this.userHobbyId = userHobbyId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Hobby getHobby() {
        return hobby;
    }

    public void setHobby(Hobby hobby) {
        this.hobby = hobby;
    }
}
