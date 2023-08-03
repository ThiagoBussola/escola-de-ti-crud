package com.projeto.escola.repository;

import com.projeto.escola.common.MeuCrudRepository;
import com.projeto.escola.entity.User;

public interface UserRepository extends MeuCrudRepository<User> {

	User findByEmail(String email);

}
