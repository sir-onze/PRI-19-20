<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:template match="/">
        <xsl:result-document href="index.html">
            
            <html>
                <link />
                <head>
                    <title>
                        Arqueossiteos
                    </title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <h1>Índice</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="LIGA">
        <a target="blank" href="https://www.google.com/search?q={.}"><xsl:value-of select="."/></a>
    </xsl:template>
    
    
    <xsl:template match="ARQELEM">
        <li>
            <a href="arqueositeos/{generate-id()}.html" id="{generate-id()}">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
        <xsl:result-document href="arqueositeos/{generate-id()}.html">
            <html>
                <link />
                <head>
                    <title>
                        <xsl:value-of select="IDENTI"/>
                    </title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <ul>
                        <li><a href="../index.html#{generate-id()}">Voltar</a></li>
                        <li><a><xsl:value-of select="count(//ARQELEM)-count(following::ARQELEM)"/>/<xsl:value-of select="count(//ARQELEM)"/></a></li>
                    </ul>
                    <div >
                        <h1>
                            <xsl:value-of select="IDENTI"/>
                        </h1>
                        <table>
                            <tr>
                                <th>Lugar: </th>
                                <td>
                                    <xsl:value-of select="LUGAR"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Concelho: </th>
                                <td>
                                    <xsl:value-of select="CONCEL"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Freguesia: </th>
                                <td>
                                    <xsl:value-of select="FREGUE"/>
                                </td>
                            </tr>
                            
                            <tr>
                                <th>Altitude: </th>
                                <td>
                                    <xsl:value-of select="ALTITU"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Acesso: </th>
                                <td>
                                    <xsl:value-of select="ACESSO"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Descrição: </th>
                                <td>
                                    <p>
                                        <xsl:apply-templates/>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>Desenho arqueológico: </th>
                                <td>
                                    <p>
                                        <xsl:value-of select="DESARQ"/>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>Fonte(s):</th>
                                <p></p>
                                <p></p>
                                <td >
                                    <xsl:for-each select="./BIBLIO">
                                        <p><xsl:value-of select="current()"/></p>
                                    </xsl:for-each>
                                </td>
                            </tr>
                            <tr>
                                <th>Autor: </th>
                                <td>
                                    <xsl:value-of select="AUTOR"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Data da informação: </th>
                                <td>
                                    <xsl:value-of select="DATA"/>
                                </td>
                            </tr>
                        </table>
                    </div>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
</xsl:stylesheet>