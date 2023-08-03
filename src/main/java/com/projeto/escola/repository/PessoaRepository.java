package com.projeto.escola.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.projeto.escola.common.MeuCrudRepository;
import com.projeto.escola.entity.Pessoa;

public interface PessoaRepository extends MeuCrudRepository<Pessoa> {
	
	Page<Pessoa> findAllByOrderByNomeAsc(Pageable pageable);
	
}
