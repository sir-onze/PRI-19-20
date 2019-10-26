<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:output method="html" 
        indent="yes" 
        encoding="UTF-8">
    </xsl:output>
    <xsl:template match="/">
        <xsl:result-document href="website/pr.html">
        <html>
            <head>
                <title>TPC3</title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <xsl:apply-templates/>  
            </body>
        </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="pr/meta">
        <h1 align="center">Project Record</h1>
        <hr></hr>
        <table width="100%" border="0">
            <tr>
                <td width="50%">
                    <b>KEY NAME: </b> 
                    <xsl:value-of select="./keyname"/>
                </td>
                <td width="50%">
                    <b>BEGIN DATE: </b>
                    <xsl:value-of select="./bdate"/>
                </td>
            </tr>
            <tr>
                <td width="50%">
                    <b>TITLE: </b>
                    <xsl:value-of select="./title"/>
                </td>
                <td width="50%">
                    <b>END DATE: </b>
                    <xsl:value-of select="./edate"/>
                </td>
            </tr>
            <tr>
                <td width="50%">
                    <b>SUBTITLE: </b>
                    <xsl:value-of select="./subtitle"/>
                </td>
                <td width="50%">
                    <b>SUPERVISOR: </b>
                    <a href="{./supervisor/homepage}"><xsl:value-of select="./supervisor/name"/></a>
                </td>
            </tr>
        </table>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="pr/workteam">
        <hr></hr>
        <h3>WorkTeam:</h3>
        <table width="100%" border="0%">
            <xsl:for-each select="./member">
                <tr>
                    <td width="50%">
                        <ol>
                            <li>
                                <xsl:value-of select="name"/>
                                -
                                <a href="mailto:{email}"><xsl:value-of select="email"/></a>
                            </li>
                        </ol>
                    </td>
                    <td width="50%">
                        <img src = "{./photo/@path}" width="10%" height="10%"/>                               
                    </td>
                </tr>
            </xsl:for-each>
        </table>
        <hr></hr>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="pr/abstract">
        <h3>Abstract:</h3>
        <xsl:for-each select="p">
            <p>
                 <xsl:apply-templates/>
            </p>
        </xsl:for-each>
        <hr></hr>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="i">
        <i><xsl:value-of select="current()"/></i>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:value-of select="current()"/></b>
    </xsl:template>
    
    <xsl:template match="u">
        <u><xsl:value-of select="current()"/></u>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}"><xsl:value-of select="current()"/></a>
    </xsl:template>
    
    <xsl:template match="pr/deliverables">
        <h3>Delieverables:</h3>
        <ul>
            <xsl:for-each select="./deliverable">
                <a href="{@path}">
                    <li>
                        <xsl:value-of select="current()"/>
                    </li> 
                </a>  
            </xsl:for-each>
        </ul>
        <hr></hr>
        <p>
            13-10-2019
        </p>
    </xsl:template>
</xsl:stylesheet>