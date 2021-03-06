<?php
/**
 * Created by PhpStorm.
 * User: thiago
 * Date: 14/08/17
 * Time: 20:01
 */

class Imagem implements \JsonSerializable
{
    private $id;
    private $arquivo;
    private $idAmbiente;
    private $idLocal;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getArquivo()
    {
        return $this->arquivo;
    }

    /**
     * @param mixed $arquivo
     */
    public function setArquivo($arquivo)
    {
        $this->arquivo = $arquivo;
    }

    /**
     * @return mixed
     */
    public function getIdAmbiente()
    {
        return $this->idAmbiente;
    }

    /**
     * @param mixed $idAmbiente
     */
    public function setIdAmbiente($idAmbiente)
    {
        $this->idAmbiente = $idAmbiente;
    }

    /**
     * @return mixed
     */
    public function getIdLocal()
    {
        return $this->idLocal;
    }

    /**
     * @param mixed $idLocal
     */
    public function setIdLocal($idLocal)
    {
        $this->idLocal = $idLocal;
    }

    public function jsonSerialize() {
        $this->idAmbiente != null ? $obj =  array(
            'id' => $this->id,
            'arquivo' => $this->arquivo,
            'id_ambiente' => $this->getIdAmbiente()
        ) :
        $obj =  array(
            'id' => $this->id,
            'arquivo' => $this->arquivo,
            'id_local' => $this->getIdLocal()
        );

        return $obj;
    }
}