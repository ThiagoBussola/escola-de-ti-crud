package com.projeto.escola.common;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface MeuCrudRepository <T extends IdDefinicao> extends JpaRepository<T, Long>{

}
