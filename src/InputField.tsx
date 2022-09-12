import { IonIcon } from '@ionic/react';
import { arrowForwardCircle, closeCircle, lockClosed } from 'ionicons/icons';
import React from 'react';
import { PropsWithChildren, ReactNode } from 'react';
import { joinClassNames } from './util/classnames';
import styles from './InputField.module.css';
import { HStack } from './Stacks';

type HTMLInputType = 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';

interface InputFieldProps {
    icon: ReactNode;
    value: string;
    htmlType?: HTMLInputType;
    onChange: (value: string) => void;
    goButton?: boolean;
    onGoButtonClick?: () => void;
    clearButton?: boolean;
    className?: string;
}

function InputField({
    icon = null,
    children,
    htmlType = 'text',
    value,
    onChange,
    goButton,
    onGoButtonClick,
    clearButton = false,
    className,
}: PropsWithChildren<InputFieldProps>) {
    function clearInput() {
        onChange('');
    }

    function getIcon() {
        if (icon) {
            return <button className={styles.Icon}>{icon}</button>;
        }
        return;
    }

    function getGoButton() {
        if (goButton) {
            return (
                <button onClick={onGoButtonClick}>
                    <IonIcon icon={arrowForwardCircle} />
                </button>
            );
        }
        return;
    }

    function getClearButton() {
        if (clearButton) {
            return (
                <button onClick={clearInput} className={styles.ClearButton}>
                    <IonIcon icon={closeCircle} />
                </button>
            );
        }
        return;
    }

    return (
        <HStack className={joinClassNames(styles.InputField, className)}>
            {getIcon()}
            <input
                type={htmlType}
                value={value}
                onChange={e => onChange(e.target.value)}
                className={styles.Input}
            />
            {children}
            {getClearButton()}
            {getGoButton()}
        </HStack>
    );
}

function TextField({
    icon = lockClosed,
    htmlType = 'text',
    value,
    onChange,
    children,
    goButton,
    onGoButtonClick,
    clearButton = false,
    className,
}: PropsWithChildren<InputFieldProps>) {
    return (
        <InputField
            htmlType={htmlType}
            value={value}
            onChange={onChange}
            icon={icon}
            goButton={goButton}
            onGoButtonClick={onGoButtonClick}
            clearButton={clearButton}
            className={className}>
            {children}
        </InputField>
    );
}

function PasswordField({
    icon = lockClosed,
    htmlType = 'password',
    value,
    onChange,
    children,
    goButton,
    onGoButtonClick,
    clearButton = false,
    className,
}: PropsWithChildren<InputFieldProps>) {
    return (
        <InputField
            htmlType={htmlType}
            value={value}
            onChange={onChange}
            icon={icon}
            goButton={goButton}
            onGoButtonClick={onGoButtonClick}
            clearButton={clearButton}
            className={className}>
            {children}
        </InputField>
    );
}

export { TextField, PasswordField };
