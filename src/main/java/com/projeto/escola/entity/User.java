package com.projeto.escola.entity;

import com.projeto.escola.common.IdDefinicao;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(schema = "projeto", name="users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User implements IdDefinicao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idkey")
	private Long id;
	
	private String email;
	
	private String senha;

}
