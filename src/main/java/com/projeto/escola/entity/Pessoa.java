package com.projeto.escola.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.projeto.escola.common.IdDefinicao;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(schema = "projeto", name="pessoa")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Pessoa implements IdDefinicao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idkey")
	private Long id;
	
	private String nome;
	
	private String cpf;
	
	@Column(name = "datanascimento")
	private LocalDate dataNascimento;
	
	@Builder.Default
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "idkey_pessoa")
	private List<Contato> contatoList = new ArrayList<>();

}
