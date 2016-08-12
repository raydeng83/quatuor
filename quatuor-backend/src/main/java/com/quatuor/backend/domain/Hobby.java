package com.quatuor.backend.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by lede on 8/12/16.
 */

@Entity
public class Hobby {
    private Long hobbyId;
    private String hobbyName;

    @OneToMany(mappedBy = "hobby", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<UserHobby> userHobbies = new HashSet<>();

    public Long getHobbyId() {
        return hobbyId;
    }

    public void setHobbyId(Long hobbyId) {
        this.hobbyId = hobbyId;
    }

    public String getHobbyName() {
        return hobbyName;
    }

    public void setHobbyName(String hobbyName) {
        this.hobbyName = hobbyName;
    }

    public Set<UserHobby> getUserHobbies() {
        return userHobbies;
    }

    public void setUserHobbies(Set<UserHobby> userHobbies) {
        this.userHobbies = userHobbies;
    }
}
