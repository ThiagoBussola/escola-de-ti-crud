package com.projeto.escola.common.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RegistroNotFoundException extends Exception {
	public RegistroNotFoundException(Long id) {
        super(String.format("Registro com ID: %d não encontrada.", id));
    }
}
